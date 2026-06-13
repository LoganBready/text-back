export type TenantId = string
export type AgencyId = string
export type ConversationId = string

export type UserRole = 'platform_admin' | 'agency_admin' | 'tenant_user'

export interface ClerkPublicMetadata {
  role: UserRole
  tenantId?: TenantId
  agencyId?: AgencyId
}
