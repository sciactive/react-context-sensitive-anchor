export interface Props<
  C extends React.ComponentType = React.ComponentClass<"a">,
  A extends React.ComponentType = React.ComponentClass<"span">
> extends Partial<React.ClassAttributes<C>> {
  /** The primary component to use when rendered normally. Defaults to `'a'`. */
  component?: C;
  /**
   * An alternative component to use when rendered within a nested context.
   * Defaults to `'span'`.
   */
  alt?: A;
  /**
   * An object containing props that should *only* be applied when rendering as
   * the primary component.
   */
  primaryProps?: React.ComponentPropsWithRef<C>;
  /**
   * An object containing props that should *only* be applied when rendering as
   * the alternate component.
   */
  altProps?: React.ComponentPropsWithRef<A>;
  /**
   * A boolean whether the link should be emulated when inside another link. I
   * would advise against using this feature, since it could confuse the user.
   * The parent href will show in the corner, but the user will be taken to the
   * child href. It's also your responsibility to style the alternate component
   * like a link.
   */
  emulateLink?: boolean;
  children?: React.ReactNode;
}

declare const ContextSensitiveAnchor: React.FunctionComponent<Props>;

export default ContextSensitiveAnchor;
