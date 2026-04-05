// Array central com todos os temas disponíveis no sistema.
// - id: chave usada internamente para filtrar eventos e no campo <select> do formulário
// - label: nome completo exibido no título de cada seção
// - tag: texto curto exibido no badge do card (com formatação especial quando necessário)
const temas = [
  { id: 'tecnologia', label: 'Tecnologia',             tag: 'Tecnologia'    },
  { id: 'design',     label: 'Design',                 tag: 'Design'        },
  { id: 'programacao',label: 'Programação',            tag: 'Programação'   },
  { id: 'ia',         label: 'Inteligência Artificial', tag: 'I.A.'          },
  { id: 'seguranca',  label: 'Segurança Digital',      tag: 'Seg. Digital'  },
]

export default temas
