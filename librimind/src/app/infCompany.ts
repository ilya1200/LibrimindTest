export interface infCompany{
    id:string;
    name:string;
    created:Date;
    updated:Date;
    children:infCompany[];
}