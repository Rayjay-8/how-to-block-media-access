

# PoC 
## Como bloquear acesso imagem clicando com direito ( right+click )

- analisando os headers e vendo o que há de diferente
1 - req.headers.referer = tem
2 - req.headers.accept = "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;"

realizando o bloqueio validando se tem referencia e se o accept começa com isso ^^^
