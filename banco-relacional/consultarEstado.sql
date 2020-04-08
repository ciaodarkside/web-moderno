select * from estados

select id, nome from estados
where nome = 'Pernambuco'

select nome, regiao from estados
where populacao >= 10
order by populacao desc