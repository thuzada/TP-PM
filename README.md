# Sistema de Informação Hospitalar (SIH)

Trabalho prático de **Programação Modular** — Bacharelado em Engenharia de Software, PUC Minas.

Sistema para gerenciar pacientes, profissionais da saúde, consultas, internações, quartos e histórico médico de um hospital de médio porte.

## Integrantes

- Arthur augusto Domingos Silva

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
