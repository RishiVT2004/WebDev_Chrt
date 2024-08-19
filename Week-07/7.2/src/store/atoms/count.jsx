import { atom , selector } from "recoil"


export const counterAtom = atom({
    key : "countAtom",
    default : 0
})

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(counterAtom)
        if(count%2 == 0){
            return true;
        }
        return false;
    }
});

// get -> (return the value)=>{given the condition} 
