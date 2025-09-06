export interface RegisterType {
  name: string;
  email: string;
  password: string;
  password2: string;
  identity: string;
}

export interface RegisterRulesType {
  name: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  email: {
    required: boolean;
    type: string;
    message: string;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  password2: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
    | {
        validator: (rule: any, value: string, callback: any) => void;
        trigger: string;
      }
  )[];
}
