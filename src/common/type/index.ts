export interface NavItem {
  path: string
  name: string
  isActive: boolean
}

export enum Type {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  warn = 'warn', // warning alias
  danger = 'danger',
  info = 'info',
}
