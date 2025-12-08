export type Clinic ={
    id: string
    name: string
    address: string
    status: 'Ativo' | 'Inativo'
    iconColor: string
    iconType: 'green' | 'red' | 'yellow' | 'blue' | 'orange' | 'light-orange';
}