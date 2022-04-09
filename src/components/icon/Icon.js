export default function SaltorisIcon({ IconSrc, fill="gray", ...props }) {
    return (
        <IconSrc fill={fill} stroke={fill}  {...props} />
    );
}