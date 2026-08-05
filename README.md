Public repository for Homework

## HW-03: HTTP/HTTPS сервер з нуля (net/tls)

### Генерація self-signed сертифіката

`*.pem` (виключені через `.gitignore`) — перед запуском 
HTTPS-сервера їх треба згенерувати:

```
openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout src/certs/localhost-key.pem \
  -out src/certs/localhost-cert.pem \
  -days 365 \
  -config src/certs/openssl-san.cnf
```

### Запуск

```
node src/server.js
node src/https-server.js
```

### Debug-сесія: openssl s_client

```
openssl s_client -connect localhost:3443 -servername localhost </dev/null
CONNECTED(00000005)
depth=0 CN = localhost
verify error:num=18:self signed certificate
verify return:1
depth=0 CN = localhost
verify return:1
---
Certificate chain
 0 s:/CN=localhost
   i:/CN=localhost
---
Server certificate
-----BEGIN CERTIFICATE-----
MIICwzCCAaugAwIBAgIJAKAnvZ+TMX6JMA0GCSqGSIb3DQEBCwUAMBQxEjAQBgNV
BAMMCWxvY2FsaG9zdDAeFw0yNjA4MDUxNDAxMzFaFw0yNzA4MDUxNDAxMzFaMBQx
EjAQBgNVBAMMCWxvY2FsaG9zdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBAMGp1roxtR/f0IMQ4yaCbn+vBntBNnspriJIsWCpSPWxtBeplF/nb8sXWQ5L
EwvIBCdcI7OUU2BWJMNGc2Xrz94XSZIcX494LS/iXFt8bjxO833fta4uBlEHW/6A
IeVfstjerQfh6t+IFstDL8POoYLL9271zkyVtizkoe6h/ywrMc9eGASTa6Z/C8sW
yYIJswLm6a0MjwXiV/gDagWfqXOp3XorEmrAoeehc8DKglq8gKGCiw6pq5iMdaDe
t8WHXzUFYsnud8tlyECoi5lORUGuFus6NS7MaSH3gelWoTn8vfAxPKK9kJBVzMEH
6X1tNgfwcyEGsZajv+kOi3Cn5J0CAwEAAaMYMBYwFAYDVR0RBA0wC4IJbG9jYWxo
b3N0MA0GCSqGSIb3DQEBCwUAA4IBAQCp5YtvNjmXG2g2AR5TueORD5BMdpX6b3eq
CX+3K0nGkVOVajIraCIstJk0ks2fhWlNWV+j9JjBm5gXONoQbP02JgkBNb2A0LYU
cQaqi6FN9PYemFoUCYJ8vG8rd/P0AyXBcBRuy7t0qjhzACVg/IViIn3PnfcXwne4
AAiBfK6zcCzOUkr33ubTcNqGxPbuIP2eB41eNr6EjPRYFXLa15dPB1//1eokyw3V
ROxLEvVcENRZz2gohCOzn8WNitLvNu9qev53o38qYniDzUTx+KFIuK9QWJ+QxavF
x/gvrzb4RJg1Iz++rdrFdIUyCmffXP/pq89Xu0sX2GnG69tj7DyV
-----END CERTIFICATE-----
subject=/CN=localhost
issuer=/CN=localhost
---
No client certificate CA names sent
Server Temp Key: ECDH, X25519, 253 bits
---
SSL handshake has read 1364 bytes and written 307 bytes
---
New, TLSv1/SSLv3, Cipher is ECDHE-RSA-AES128-GCM-SHA256
Server public key is 2048 bit
Secure Renegotiation IS supported
Compression: NONE
Expansion: NONE
No ALPN negotiated
SSL-Session:
    Protocol  : TLSv1.2
    Cipher    : ECDHE-RSA-AES128-GCM-SHA256
    Session-ID: E2AB820BEA6C2086D4BB824E59F80F4960E27A4388C8072C7E6388A26C56935D
    Session-ID-ctx: 
    Master-Key: 47E5C594AB73AEA808C62283B2DF4E022BB0F2831EA41CC0104F3B952E5C5A6D1489254A6B379E86B7CFBFE3BE25D92D
    TLS session ticket lifetime hint: 7200 (seconds)
    TLS session ticket:
    0000 - 95 6c 98 8f ed 90 a6 55-e5 ec c5 81 8a 4b ae 55   .l.....U.....K.U
    0010 - 89 9a c9 fd 99 90 2c c8-57 35 28 df bc 69 0b 9c   ......,.W5(..i..
    0020 - e7 9b fe b3 5e 8a 5e 0f-81 ed c8 a0 1b 93 21 fa   ....^.^.......!.
    0030 - eb b9 0c 06 bc ca 04 fb-3a 36 93 93 3f 8a 22 6f   ........:6..?."o
    0040 - 2b 6f 29 2c 4f 3a 8f 33-e2 86 58 6a 92 1a 8e 9f   +o),O:.3..Xj....
    0050 - 8c 18 2a 7b 95 21 86 3f-14 07 67 62 e4 b2 51 4d   ..*{.!.?..gb..QM
    0060 - 29 05 dc 78 64 d9 99 6f-98 96 25 08 3d 77 f8 9e   )..xd..o..%.=w..
    0070 - c8 46 5d 30 55 d0 3d b0-77 9b 38 eb 50 64 64 0e   .F]0U.=.w.8.Pdd.
    0080 - 67 2c c8 a3 7b e0 3d 74-77 32 d9 2e 5b 94 49 c2   g,..{.=tw2..[.I.
    0090 - 57 76 25 d2 0f 5a 19 58-0e 28 a0 f2 77 73 0b 9e   Wv%..Z.X.(..ws..
    00a0 - 33 ad 1a 5f 76 e3 04 1e-43 cb e2 d1 bc c7 ad ea   3.._v...C.......
    00b0 - 6b e3 20 a7 3f 4b ff 3a-3f 38 51 f7 96 81 a8 75   k. .?K.:?8Q....u

    Start Time: 1785942132
    Timeout   : 7200 (sec)
    Verify return code: 18 (self signed certificate)
---
poll error%
```

Коди помилки
- `18` означає, що сертифікат самопідписаний (self-signed) — виданий сам собою, а не довіреним CA.
- `19` — chain incomplete: проміжний сертифікат ланцюжка довіри відсутній, тому клієнт не може дійти до root CA.
- `10` — expired: строк дії сертифіката вже минув.
