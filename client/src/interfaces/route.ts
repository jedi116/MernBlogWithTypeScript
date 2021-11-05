export default interface IRoute {
    name: string;
    path: string;
    exact: boolean;
    auth: boolean;
    component: any;
    props?: any;
}
