type Payload<T extends Object> = T;

export type Action = {
  type: string;
  payload: Payload<Object>;
};
