export function responseMustBeOk(response: Response): Response {
    if (!response.ok) throw new Error("Invalid response");

    return response;
}
