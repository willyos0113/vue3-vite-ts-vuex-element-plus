// 註冊表單資料型別
export interface RegisterType {
  name?: string;
  email: string;
  password: string;
  password2?: string;
  identity?: string;
}

// 驗證規則
export interface RegisterRulesType {
  name?: (
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
  password2?: (
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

// token 攜帶使用者資料型別
export interface UserType {
  exp: number;
  iat: number;
  id: string;
  identity: string;
  iss: string;
  name: string;
}
