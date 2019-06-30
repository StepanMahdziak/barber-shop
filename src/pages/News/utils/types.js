export interface IItemProps {
    title : String;
    img : String;
    desc: String;
}

export interface IInitialState {
    news : [IItemProps],
    oneNews : IItemProps
}