const Radio = ({
  text,
  field,
  options,
  user,
  setUser,
  editable = true,
  required,
}) => {
  const handleClick = (optionKey, option) => {
    if (field === "tier" || field === "affiliation" || field === "panelist") {
      setUser({ ...user, [field]: optionKey });
    } else {
      setUser({ ...user, [field]: option });
    }
  };

  return (
    <div
      data-cy={`radio-${field}`}
      className="flex flex-col mb-4 font-workSans"
    >
      <p className="mb-1 font-regular">
        {text}
        {required && <span className="text-design-orange">*</span>}
      </p>
      {!editable && (
        <div data-cy={`radio-${field}-default`} className="pl-3">
          {user[field]}
        </div>
      )}
      {editable && (
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          {Object.entries(options).map(([optionKey, option], index) => (
            <div
              data-cy={`radio-${option}`}
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(optionKey, option)}
            >
              <div className="rounded-full w-4 border-black border aspect-square bg-transparent p-0.5 mr-1">
                <div
                  data-cy={`radio-button-${option}`}
                  className={`rounded-full w-full aspect-square duration-100 ${
                    user[field] === option || user[field] === optionKey
                      ? "bg-newdesign-blue-200"
                      : "bg-transparent"
                  }`}
                />
              </div>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
