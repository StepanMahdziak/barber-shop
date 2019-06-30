export interface IItemProps {
    title : String;
    img : String;
    desc: String;
    id : String;
}

export interface INewsInitialState {
    news : [IItemProps],
    oneNews : IItemProps
}