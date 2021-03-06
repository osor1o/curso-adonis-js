# Ambiente docker para o curso de AdonisJS.

**[Requisitos](#requisitos)**

**[Iniciando aplicação](#iniciando-aplicação)**
- [Construir, criar e inciar containers](#construir-criar-e-inciar-containers)
- [Acessar container com AdonisJS](#acessar-container-com-adonisjs)
- [Criar projeto](#criar-projeto)
- [Iniciar servidor](#iniciar-servidor)

**[Comandos adicionais](#comandos-adicionais)**

- [Construir/Reconstruir containers](#construirreconstruir-containers)
- [Iniciar containers pausados](#iniciar-containers-pausados)
- [Pausar containers](#pausar-containers)
- [Destruir containers](#destruir-containers)

---

## Requisitos
- **Docker:** https://docs.docker.com/install/
- **Docker Compose:** https://docs.docker.com/compose/install/

---

## Iniciando aplicação

### Construir, criar e inciar containers

```
docker-compose up
```

### Acessar container com AdonisJS

```
docker-compose exec api bash
```

### Criar projeto

```
adonis new . --api-only
```

### Iniciar servidor

```
adonis serve --dev
```

---

## Comandos adicionais

### Construir/Reconstruir containers

```
docker-compose build
```

### Iniciar containers pausados

```
docker-compose start
```

### Pausar containers

```
docker-compose stop
```

### Destruir containers

```
docker-compose down
```
