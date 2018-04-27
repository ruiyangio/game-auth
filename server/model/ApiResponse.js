class ApiResponse {
  constructor(status, body) {
    this.status = status || 200;
    this.body = body || {};
  }
}
