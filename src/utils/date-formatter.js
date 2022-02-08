// reformats dates supplied as ISO 8601 format strings to be more readable

export function dateFormatter(date) {
     new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    let dateReformatted = dateFormatter(date);
    return dateReformatted;
}

