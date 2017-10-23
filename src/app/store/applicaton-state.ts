import { UiState, INITIAL_UI_STATE } from "app/store/ui-state";
import { StoreData, INITIAL_STORE_DATA } from "app/store/store-data";

//This state will be composed of the data - classes defined in model folder
export interface ApplicationState {

    //has two components

    //slice of data.
    //1.(StoreData) What s the current selected info in the application.
    // suppose if we select a row in the resource schedule thing, this will have the respective
    // info of it.(exact data we store in the application.)
    //2.UiState - what is the current selected user.

    uiState:UiState;
    storeData:StoreData;

}

export const  INITIAL_APPLICATION_STATE:ApplicationState = {
    uiState:INITIAL_UI_STATE,
    storeData:INITIAL_STORE_DATA
}