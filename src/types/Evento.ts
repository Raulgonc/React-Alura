// Define o formato (contrato) de um evento no sistema.
// Todos os componentes que criam ou consomem eventos usam essa interface.
export interface Evento {
  id: number        // Identificador único gerado via Date.now()
  nome: string      // Nome do evento
  data: string      // Data no formato ISO: YYYY-MM-DD (vindo do input date)
  tema: string      // ID do tema: 'tecnologia', 'design', 'ia', etc.
  descricao: string // Descrição longa do evento (até 500 caracteres)
  imagem: string    // URL local gerada via URL.createObjectURL() ou caminho de asset
}
