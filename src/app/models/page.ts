export class Page<T> {
    totalElements = 0;
    totalPages = 0;
    size = 20;
    number = 0;
    content: Array<T> = [];
}
