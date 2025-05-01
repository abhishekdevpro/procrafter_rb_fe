import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DateRangeExperience from "../utility/DateRangeExperience";
import { useTranslation } from "react-i18next";

const WorkExperience = ({
  resumeData,
  headerColor,
  className = "",
  style = {},
  itemClassNames = {},
}) => {
  const { t } = useTranslation();
  if (
    resumeData.is_fresher ||
    !resumeData?.workExperience ||
    resumeData.workExperience.length === 0
  ) {
    return null;
  }

  return (
    <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={className}
          style={style}
        >
          <h2
            className={`${itemClassNames.title || ""}`}
            contentEditable
            suppressContentEditableWarning
            style={{
              color: headerColor,
              borderBottom: `2px solid ${headerColor}`,
            }}
          >
            {t("resumePreview.workExperience")}
          </h2>

          {resumeData.workExperience.map((item, index) => (
            <Draggable
              key={`${item.company}-${index}`}
              draggableId={`WORK_EXPERIENCE-${index}`}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`hover:scale-105 transition-transform duration-300 mb-3 p-2 rounded-md ${
                    itemClassNames.content || ""
                  } ${
                    snapshot.isDragging
                      ? "outline-dashed outline-2 outline-gray-400 bg-white"
                      : ""
                  }`}
                >
                  <div className="flex flex-row justify-between space-y-1">
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className="font-semibold"
                    >
                      {item.company}
                    </p>
                    <DateRangeExperience
                      startYear={item.startYear}
                      endYear={item.endYear}
                      id={`work-experience-start-end-date-${index}`}
                    />
                  </div>

                  <div className="flex flex-row justify-between space-y-1">
                    <p
                      className="font-medium"
                      contentEditable
                      suppressContentEditableWarning
                    >
                      {item.position}
                    </p>
                    <p contentEditable suppressContentEditableWarning>
                      {item.location}
                    </p>
                  </div>

                  <p
                    className="hover:outline-dashed hover:outline-2 hover:outline-gray-400"
                    contentEditable
                    suppressContentEditableWarning
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {Array.isArray(item?.keyAchievements) &&
                    item.keyAchievements.length > 0 && (
                      <Droppable
                        droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                        type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                      >
                        {(provided) => (
                          <ul
                            className="list-disc pl-6 mt-2"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {item.keyAchievements.map(
                              (achievement, subIndex) => (
                                <Draggable
                                  key={`ACHIEVEMENT-${index}-${subIndex}`}
                                  draggableId={`ACHIEVEMENT-${index}-${subIndex}`}
                                  index={subIndex}
                                >
                                  {(provided, snapshot) => (
                                    <li
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`hover:scale-105 transition-transform duration-300 hover:outline-dashed hover:outline-2 hover:outline-gray-400 ${
                                        snapshot.isDragging
                                          ? "outline-dashed outline-2 outline-gray-400 bg-white"
                                          : ""
                                      }`}
                                    >
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: achievement,
                                        }}
                                        contentEditable
                                        suppressContentEditableWarning
                                      />
                                    </li>
                                  )}
                                </Draggable>
                              )
                            )}
                            {provided.placeholder}
                          </ul>
                        )}
                      </Droppable>
                    )}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default WorkExperience;
