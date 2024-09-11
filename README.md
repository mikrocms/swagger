<h1  align="center">mikrocms swagger</h1>

Swagger UI generates interactive documentation from a Swagger-compliant API specification, typically written in the OpenAPI Specification (OAS) format. Users can explore endpoints, view parameter details, and see responses in real-time.
 
| Specification | version |
|:--|:--:|
| mikrocms/core | 1.0.0 |

| Config | Module |
|:--|:--|
| router | default |


### Environment

-  **mikrocms@swagger.auth** (*object*) : A list of authentication methods using key pairs. Do not define this environment variable to allow Swagger to operate without requiring authentication or access control.

```js
{
  "username": "password"
}
```

- **mikrocms@swagger.servers** (*array*) : Specifies the base URLs available for all documentation.

```js
[
  {
    "url": "baseurl",
    "description": "name of the base URL"
  }
]
```

- **mikrocms@swagger.urls** (*array*) : Locations of URLs pointing to the files where documentation is stored.

```js
[
  {
    "url": "URL to the documentation file",
    "name": "Name of the documentation"
  }
]
```

## Views

| Path | description |
|:--|:--|
| mikrocms@swagger/login | The page handles authentication to allow access to the Swagger UI. |
| mikrocms@swagger/ui | Page that contains the Swagger UI. |

## Services

You can find detailed documentation of the service in the API documentation.
