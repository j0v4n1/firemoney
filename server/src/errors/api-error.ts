export default class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  static unauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }
  static incorrectDataError() {
    return new ApiError(400, 'Неверные данные');
  }
  static notFoundError(reason: string) {
    return new ApiError(404, `Не найдено, причина: ${reason}`);
  }
  static serverSideError(reason: string) {
    return new ApiError(500, `Проблема на стороне сервера, причина: ${reason}`);
  }
  static badRequestError() {
    return new ApiError(500, `Не корректный запрос с клиента`);
  }
  static conflictError(reason: string) {
    return new ApiError(409, `Конфликта с текущим состоянием ресурса, причина: ${reason}`);
  }
}
