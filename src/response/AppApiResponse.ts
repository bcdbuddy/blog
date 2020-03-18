export default class AppApiResponse {
    private type: string
    private data: any
    private message: string
    public static readonly TYPE_SUCCESS = 'success'
    public static readonly TYPE_ERROR = 'error'

    constructor({data, type, message}) {
        this.type = type
        this.message = message
        this.data = data
    }

     toString () {
        return JSON.stringify({
            type: this.type,
            message: this.message,
            data: this.data
        })
     }
}
