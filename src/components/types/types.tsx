export type Processes = {
  id: string;
  name: string;
  numberOfExecutions: number;
  averageLeadTime: number;
  averageActiveTime: number;
  employeesInvolvedProcess: number;
  numberOfScenarios: number;
  start: number;
  end: number;
  loading: number;
};

export type User = {
  id: number;
  firstName?: string;
  secondName?: string;
  email?: string;
};

export type Login = {
  token: string;
  user: User;
};

export type LoginRequest = { email: string; password: string };

export type UserRequest = {
  id: number;
  firstName?: string;
  secondName?: string;
  email?: string;
  password: string;
};

export type CurrentUser = User;
