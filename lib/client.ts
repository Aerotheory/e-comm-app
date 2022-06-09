import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

const protocol = `${process.env.MODE_ENV === "development" ? "http" : "https"
    }://`;

const host =
    typeof window === "undefined"
        ? process.env.NODE_ENV_PUBLIC_VERCEL_URL || "localhost:3000"
        : window.location.host;

export const origin = `${protocol}${host}`;

export const useClient = () => {
    const client = useMemo(
        () =>
            new ApolloClient({
                uri: `${origin}/api`,
                cache: new InMemoryCache(),
            }),
        []
    );
    return client;
};