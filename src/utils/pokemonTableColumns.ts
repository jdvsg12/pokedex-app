export const pokemonTableColumns = [
  { key: 'id', label: 'ID', type: 'number', sortable: true },
  { key: 'name', label: 'Nombre', type: 'string', sortable: true },
  { key: 'types', label: 'Tipos', type: 'string', sortable: true },
  { key: 'weight', label: 'Peso (kg)', type: 'number', sortable: true },
  { key: 'height', label: 'Altura (m)', type: 'number', sortable: true },
  {
    key: 'base_experience',
    label: 'Experiencia base',
    type: 'number',
    sortable: true
  },
  { key: 'hp', label: 'Salud base', type: 'number', sortable: true },
  { key: 'attack', label: 'Ataque base', type: 'number', sortable: true },
  { key: 'defense', label: 'Defensa base', type: 'number', sortable: true },
  {
    key: 'special_attack',
    label: 'Ataque especial',
    type: 'number',
    sortable: true
  },
  {
    key: 'special_defense',
    label: 'Defensa especial',
    type: 'number',
    sortable: true
  },
  { key: 'speed', label: 'Velocidad', type: 'number', sortable: true }
]
