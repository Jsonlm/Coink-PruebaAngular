import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Characters } from '../models/characters';
import { environment } from 'src/environments/environment';
import { catchError} from 'rxjs/operators';

const ENV_URL = environment;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getCharacters(
    page: number,
    name: string,
    type: string
  ): Observable<Characters> {

    if (type === undefined || null || "") {
      type = "";
    }

    if (name === undefined || null || "") {
      name = "";
    }

    page !== 1 ? page : page = 1

    let pg = page.toString();
    let filter = `?page=${pg}&name=${name}&type=${type}`;

    return this.http.get<Characters>(`${ENV_URL.URL}` + filter).pipe(
      catchError(
        err => throwError(
          () => new Error('Service Error')
        )
      )
    );
  }
}
