export interface USER_DATA {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
export namespace USER {
  export interface USER_REQUEST {
    page: string | undefined;
  }
  export interface USER_RESPONSE {
    data: Array<USER_DATA>;
  }
}
