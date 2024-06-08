export type User = {
    name: string;
    email: string;
    token: string;
};

export type Recommendation = {
    id?: string;
    title: string;
    link: string;
    description: string;
    location: string;
    rating: number;
    userName?: string;
};

export type Group = {
    id?: string;
    name: string;
    userEmails: string[];
}