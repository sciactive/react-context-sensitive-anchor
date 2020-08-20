export type AnchorContext = {
  withinAnchor: boolean;
};

declare const AnchorCtx: React.Context<AnchorContext>;

export { AnchorCtx };