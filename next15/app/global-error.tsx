'use client';


type GlobalErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <pre style={{ color: 'red' }}>{error.message}</pre>
                <button onClick={reset}>Try again</button>
            </body>
        </html>
    );
}