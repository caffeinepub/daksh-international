import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    id: bigint;
    country: Country;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export enum Country {
    uk = "uk",
    usa = "usa",
    australia = "australia",
    europe = "europe",
    canada = "canada"
}
export interface backendInterface {
    addEnquiry(name: string, email: string, phone: string, country: Country, message: string): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
}
