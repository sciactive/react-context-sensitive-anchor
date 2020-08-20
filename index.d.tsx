export interface Props<
  C extends React.ComponentType = React.ComponentClass<"a">,
  A extends React.ComponentType = React.ComponentClass<"span">
> extends Partial<React.ClassAttributes<C>> {
  component?: C;
  alt?: A;
  anchorProps?: React.ComponentPropsWithRef<C>;
  altProps?: React.ComponentPropsWithRef<A>;
  children?: React.ReactNode;
}

declare const ContextSensitiveAnchor: React.FunctionComponent<Props>;

export default ContextSensitiveAnchor;
