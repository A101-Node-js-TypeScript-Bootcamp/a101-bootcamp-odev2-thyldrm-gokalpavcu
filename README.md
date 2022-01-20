
# Trendyol API

Proje'de api.trendyol.com sitesinden belirli endpointler belirli kriterlere göre çekilmiştir.



## API Kullanımı

#### Belirli bir isme göre o markayı getirir.

```http
  GET /markalar/:markaName
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `markaName` | `string` | **Gerekli**. API anahtarı. |

#### Tüm kategorileri getirir.

```http
  GET /categories/
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
|      -     | `string` | -|

#### Belirli bir id'ye göre o kategoriyi getirir.

```http
  GET /categories/:id
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Gerekli**. API anahtarı. |

#### Veritabanı varmışçasına login similasyonu.

```http
  POST /user/register
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `register` | `string` |  |

#### Veritabanı varmışçasına register similasyonu.

```http
  POST /user/login
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `login` | `string` |  |






  
### Joi ile validasyon işlemi için oluşturulan şema

```javascript
const loginAndRegisterValidation = Joi.object({
    password: Joi.string().required().min(8),
    email: Joi.string().required().email(),
})

```

### Kullanıcı giriş işlemi ile birlikte validasyon işlemini geçer.

```javascript 
router.route("/register").post(validate(schemas.loginAndRegisterValidation),register)
```
#### Validasyon işlemini geçtikten sonra kullanıcıya gerekli olan token sağlanır. Eğer kullanıcı giriş yapamamış yani tokeni alamamış ise aşağıdaki kodda if bloğuna düşer.

```javascript
const authenticateToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1] || null;
    if (token === null) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: "Giriş yapmalısınız" })
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err });
        req.user = user._doc;
        next();
    })
}
```






  
## Yazarlar

- [@thyldrm](https://github.com/thyldrm) & [@GokalpAvcu](https://github.com/GokalpAvcu)

  