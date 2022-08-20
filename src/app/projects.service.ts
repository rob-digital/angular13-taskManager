import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  urlPrefix: string = "http://localhost:9090";

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]>
  {
    let currentUser = { token: "" }
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer ")   // mind the space after Bearer_

    if (sessionStorage.currentUser != null) {
      currentUser = JSON.parse(sessionStorage.currentUser)
      headers = headers.set("Authorization", "Bearer " + currentUser.token)
    }

    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { headers: headers, responseType: "json"})
            // check https://rxjs.dev/guide/operators
            .pipe(map(
              (data) => {
                console.log("data... ", data);

                for (let i = 0; i < data.length; i++) {
                  data[i].teamSize = data[i].teamSize * 100
                }

                return data
              }))
  }


  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject, { responseType: "json"});
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject, { responseType: "json"});
  }

  deleteProject(projectID: number): Observable<string> {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + projectID);
  }

  searchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + '/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}
