"use client";

import React from "react";
import { Card, Col, Row } from "antd";
import { useTheme } from "@/Context/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { BigProjects } from "@/utils/home-text";
const Projects = () => {
  const { api = [] } = useTheme() || {};

  return (
    <div className="p-11">
      <div className="flex mb-8">
        <h1 className="text-4xl font-bold hover:translate-x-1 hover:text-blue-500">
          Open Source Projects
        </h1>
      </div>
      <Row gutter={[24, 24]} className="text-white">
        {api.length > 0 ? (
          api.slice(0, 6, 9).map((project) => (
            <Col key={project.id} xs={24} sm={24} md={16} lg={12} xl={8}>
              <Card
                className="bg-[#090E20] hover:bg-sky-600  hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]  text-white transition-all duration-300 rounded-lg "
                bordered={false}
              >
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm">
                  {project.description || "No description available"}
                </p>
                <div className="mt-2 flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-300">
                      ● {project.language}
                    </span>
                    <span className="text-gray-400">
                      <i className="fas fa-code-branch"></i>{" "}
                      {project.forks || 0}
                    </span>
                    <span className="text-gray-400">
                      <i className="fas fa-star"></i> {project.stars || 0}
                    </span>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </div>
                  <div className="text-gray-400">{project.size || "0 "} MB</div>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Card bordered={false} className="bg-black text-white">
              <p>Loading projects or no projects available.</p>
            </Card>
          </Col>
        )}
      </Row>

      <div className="flex  items-center w-full justify-center mt-10">
        <Button>
          <a
            href="https://github.com/KHALIDCHOUHANGUJJAR?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-bold text-xl"
          >
            More Projects
          </a>
        </Button>
      </div>

      <div className="p-6 mt-8 flex justify-center  gap-10 flex-col ">
        <div>
          <h1 className="text-4xl font-bold hover:translate-x-1 hover:text-blue-500">
            Big Projects
          </h1>
        </div>
        <div className="p-6  flex justify-center items-center gap-10 md:flex-row flex-col">
          {BigProjects.map((item, index) => (
            <Card
              key={index}
              className="bg-[#090E20] text-blue-50 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:scale-105 w-full md:max-w-[40vw] max-w-[100%]"
            >
              <CardHeader>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.ProName || "Project Image"}
                    width={1000}
                    height={1000}
                    className=" transform transition-transform duration-300 hover:translate-x-1 hover:translate-y-2 w-full translate-x-1 object-cover rounded-sm"
                  />
                ) : null}
                <CardDescription>
                  <h2 className="text-xl font-extrabold">
                    {item.ProName || "No Project Name"}
                  </h2>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className=" font-bold ">
                  {item.description.slice(0, 300) || "No description available"}
                  ...
                </p>
              </CardContent>
              <CardFooter className="flex gap-6 font-bold">
                {item.githubUrl && (
                  <Button>
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View on GitHub
                    </a>
                  </Button>
                )}
                {item.webUrl && (
                  <Button>
                    <a
                      href={item.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-blue-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
