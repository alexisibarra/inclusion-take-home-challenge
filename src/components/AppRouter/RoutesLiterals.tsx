interface IRouteLiteral {
  name: string;
  route: string;
}

type TSection = "healthStatus";

type TRoutesLiterals = Record<TSection, IRouteLiteral>;

const RoutesLiterals: TRoutesLiterals = {
  healthStatus: {
    name: "Health Status",
    route: "/healthStatus",
  },
};

export default RoutesLiterals;
