# ItTeam

Se realiza un aplicativo CRUD de registro de ofertas con su respectivo nombre oferta y precio.

Este proyecto esta generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.


## Instalar local

### Requisitos 

* [backendItTeam](https://github.com/murgaratone/backendItTeam) Corriendo en el puerto 8080
* Node version v16.13.0+

### Configurar backend

Ir a [service.service.ts](src\app\Service\service.service.ts) y configurar la respectiva url

```ts
export class ServiceService {
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/offers';
...
```

### Instalar dependencias

Correr el comando `npm install` 

## Correr
`npm run`


