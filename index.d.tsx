export interface Props<
  T extends React.ComponentType = React.ComponentClass<"span">
> extends Partial<React.ComponentPropsWithRef<"a">> {
  alt?: T;
  anchorProps?: React.ComponentPropsWithRef<"a">;
  altProps?: React.ComponentPropsWithRef<T>;
  children?: React.ReactNode;
  [k: string]: any;
}

declare const ContextSensitiveAnchor: React.FunctionComponent<Props>;

export default ContextSensitiveAnchor;
