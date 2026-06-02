declare module 'paubox-node' {
  export interface PauboxConfig {
    apiUsername?: string
    apiKey?: string
  }

  export interface MessageOptions {
    from: string
    to: string[]
    subject?: string
    text_content?: string
    html_content?: string
    reply_to?: string
    cc?: string[]
    bcc?: string[]
    custom_headers?: Record<string, string>
    allowNonTLS?: boolean
    forceSecureNotification?: boolean
  }

  export interface PauboxMessage {
    toJSON(): unknown
  }

  export interface PauboxSendResponse {
    sourceTrackingId?: string
    data?: string
    errors?: unknown
  }

  export interface PauboxEmailService {
    sendMessage(message: PauboxMessage): Promise<PauboxSendResponse>
    getEmailDisposition(sourceTrackingId: string): Promise<unknown>
  }

  export function emailService(config?: PauboxConfig): PauboxEmailService
  export function message(options: MessageOptions): PauboxMessage
}
