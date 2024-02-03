import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";
import {PatientViewSearch} from "../model/patient-view-search";
import {PatientView} from "../model/patient-view";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = `${environment.apiUrl}/patients`;

  constructor(private http: HttpClient) {}

  getPatients(request: PatientViewSearch): Observable<any> {
      let params: HttpParams = new HttpParams();
      params = params.append('limit', request.limit);
      params = params.append('offset', request.offset);
    return this.http.get(this.apiUrl, { params });
  }

  getPatient(patientId: number): Observable<any> {
      let params: HttpParams = new HttpParams();
      params = params.append('patient_id', patientId);
      return this.http.get(this.apiUrl, { params });
  }

  addPatient(patient: PatientView): Observable<any> {
    return this.http.post(this.apiUrl, patient);
  }
}
