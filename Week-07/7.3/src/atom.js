import { atom, selector } from "recoil";

export const ConnectionAtom = atom({
    key:"ConnectionAtom",
    default : 100,
})

export const MessageAtom = atom({
    key:"MessageAtom",
    default : 100,
})

export const NotificationAtom = atom({
    key:"NotificationAtom",
    default : 90,
})
// selector -> derived from other atoms
export const sumSelector = selector({
    key : "sumSelector" , 
    value : ({get}) => {
        const ConnectionCount = get(ConnectionAtom);
        const MessageCount = get(MessageAtom);
        const NotificationCount = get(NotificationAtom);
        return ConnectionCount + MessageCount + NotificationCount

    }
})