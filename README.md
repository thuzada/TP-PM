# Sistema de Informação Hospitalar (SIH)

Trabalho prático de **Programação Modular** — Bacharelado em Engenharia de Software, PUC Minas.

Sistema para gerenciar pacientes, profissionais da saúde, consultas, internações, quartos e histórico médico de um hospital de médio porte.

## Integrantes

- Nome Completo do Integrante 1
- Nome Completo do Integrante 2
- Nome Completo do Integrante 3
- Nome Completo do Integrante 4
- Nome Completo do Integrante 5

## Sprint 1 — Entregas

| Item | Arquivo |
|------|---------|
| Front-end (telas sem funcionalidade) | [`frontend/`](frontend/) |
| Diagrama de Classes | [`docs/diagrama-classes.png`](docs/diagrama-classes.png) · fonte PlantUML: [`docs/diagrama-classes.puml`](docs/diagrama-classes.puml) |
| Cartões CRC | [`docs/Cartoes-CRC.docx`](docs/Cartoes-CRC.docx) |

### Telas

| Tela | Arquivo | Conteúdo |
|------|---------|----------|
| Painel | `index.html` | Indicadores gerais, próximas consultas e altas previstas |
| Pacientes | `pacientes.html` | Listagem e cadastro (nome, CPF, nascimento, telefone, e-mail, endereço) |
| Profissionais | `profissionais.html` | Listagem e cadastro (nome, registro, especialidade, telefone, e-mail) |
| Consultas | `consultas.html` | Agenda, agendamento e registro da consulta |
| Internações | `internacoes.html` | Internações ativas/finalizadas, nova internação e alta |
| Quartos | `quartos.html` | Ocupação por quarto, capacidade e situação |
| Histórico Médico | `historico.html` | Linha do tempo de consultas e internações do paciente |

Os dados exibidos são fictícios e estão fixos no HTML. Ao enviar um formulário, a tela apenas avisa que a funcionalidade virá nas próximas sprints.

### Como executar o front-end

Abra `frontend/index.html` no navegador, ou sirva a pasta:

```bash
cd frontend
python3 -m http.server 8080
# acesse http://localhost:8080
```

### Como regenerar o diagrama

```bash
java -jar plantuml.jar -tpng -tsvg docs/diagrama-classes.puml
```

O arquivo usa `!pragma layout smetana`, então não é preciso instalar o Graphviz.

## Modelo de domínio (resumo)

- `Pessoa` (abstrata) → `Paciente`, `ProfissionalSaude`
- `Atendimento` (abstrata) → `Consulta`, `Internacao`
- `Quarto` controla a capacidade máxima (RN5); a situação é derivada da ocupação
- `ProfissionalSaude.estaDisponivel()` impede dois atendimentos no mesmo horário (RN3)
- `HistoricoMedico` reúne consultas e internações do paciente (RN6)

## Próximas sprints

- API REST com Spring Boot (Controller → Service → Repository → Model)
- Persistência em banco de dados (escolha e justificativa técnica a definir)
- Tratamento de exceções e testes automatizados
