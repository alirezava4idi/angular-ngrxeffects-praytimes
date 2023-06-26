import { Status } from "../actions/info.actions";

export interface Info {
    CityName: string,
    Today: string,
    TodayQamari: string,
    Imsaak: string,
    Sunrise: string,
    Noon: string,
    Sunset: string,
    Maghreb: string,
    Midnight: string,
}

export interface InfoLoadStatus {
    status: Status
}