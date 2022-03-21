/* date formatter 
    - converts dates from ISO8601 to more readable format 
    - formatting style based on user's locale
*/
export const formatDate = (suppliedLongDate) => {

    let formattedDate = 
        new Date(suppliedLongDate).toLocaleDateString(navigator.language, {
            year: '2-digit', month: 'short', day: '2-digit'
        });
    return (formattedDate);
}
 

